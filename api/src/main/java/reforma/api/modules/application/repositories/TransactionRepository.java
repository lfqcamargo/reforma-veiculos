package reforma.api.modules.application.repositories;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import reforma.api.modules.application.entities.TransactionEntity;

public interface  TransactionRepository extends JpaRepository<TransactionEntity, UUID> {}