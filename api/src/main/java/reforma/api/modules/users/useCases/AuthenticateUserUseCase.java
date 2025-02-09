package reforma.api.modules.users.useCases;

import java.time.Duration;
import java.time.Instant;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import reforma.api.modules.shared.exceptions.ResourceNotFoundError;
import reforma.api.modules.users.dto.AuthUserDTO;
import reforma.api.modules.users.repositories.UsersRepository;


@Service
public class AuthenticateUserUseCase {

  @Value("${security.token.secret}")
  private String secretKey;

  @Autowired
  private UsersRepository usersRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  public String execute(AuthUserDTO authUserDTO) throws AuthenticationException {
    var user = this.usersRepository.findByEmail(authUserDTO.getEmail()).orElseThrow(() -> {
      throw new ResourceNotFoundError("email/password incorrect");
    });

    var passwordMatches = this.passwordEncoder.matches(authUserDTO.getPassword(), user.getPassword());
    if (!passwordMatches) {
      throw new AuthenticationException();
    }

    Algorithm algorithm = Algorithm.HMAC256(secretKey);

    var token = JWT.create().withIssuer("reforma")
        .withExpiresAt(Instant.now().plus(Duration.ofHours(2)))
        .withSubject(user.getId().toString())
        .sign(algorithm);

    return token;
  }
}