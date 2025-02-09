package reforma.api.modules.users.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import reforma.api.modules.shared.exceptions.AlreadyExistsError;
import reforma.api.modules.users.entities.UserEntity;
import reforma.api.modules.users.repositories.UsersRepository;

@Service
public class CreateUserUseCase {
  
  @Autowired
  private UsersRepository usersRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;


  public UserEntity execute(UserEntity userEntity) {
    this.usersRepository.findByEmail(userEntity.getEmail()).ifPresent(user -> {
      throw new AlreadyExistsError("Email já cadastrado.");
    });

    var password = passwordEncoder.encode(userEntity.getPassword());
    userEntity.setPassword(password);

    return this.usersRepository.save(userEntity);
  }  
}
