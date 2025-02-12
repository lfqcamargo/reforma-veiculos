package reforma.api.modules.users.controllers;

import javax.naming.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reforma.api.modules.users.dto.AuthUserRequestDTO;
import reforma.api.modules.users.useCases.AuthenticateUserUseCase;


@RestController
@RequestMapping("/auth")
public class AuthUserController {
  
  @Autowired
  private AuthenticateUserUseCase authenticateUserUseCase;

  @PostMapping("/")
  public ResponseEntity<Object> create(@RequestBody AuthUserRequestDTO authCompanyDTO) {
    try {
      var result = authenticateUserUseCase.execute(authCompanyDTO);
      return ResponseEntity.ok(result);
    } catch (AuthenticationException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }
  }
}