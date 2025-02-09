package reforma.api.modules.users.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;


@Entity(name="users")
@Data
public class UserEntity {

  @Id
  @GeneratedValue(strategy= GenerationType.UUID)
  private UUID id;

  @NotBlank(message = "Campo obrigátorio.")
  private String name;

  @NotBlank(message = "Campo obrigátorio.")
  @Email(message = "O campo [email] deve conter um e-mail válido.")
  private String email;

  @NotBlank(message = "Campo obrigátorio.")
  @Length(min=6, message="A senha deve conter pelo menos 6 caracteres")
  private String password;

  @CreationTimestamp
  private LocalDateTime createdAt;
}
