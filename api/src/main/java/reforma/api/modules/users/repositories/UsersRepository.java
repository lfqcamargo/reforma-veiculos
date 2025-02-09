package reforma.api.modules.users.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import reforma.api.modules.users.entities.UserEntity;

public interface UsersRepository extends JpaRepository<UserEntity, UUID>{
  Optional<UserEntity> findByEmail(String email);
}
