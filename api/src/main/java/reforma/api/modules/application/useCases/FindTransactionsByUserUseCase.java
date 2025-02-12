package reforma.api.modules.application.useCases;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import reforma.api.modules.application.dto.TransactionsResponseDTO;
import reforma.api.modules.application.entities.TransactionEntity;
import reforma.api.modules.application.repositories.TransactionRepository;

@Service
public class FindTransactionsByUserUseCase {

  @Autowired
  private TransactionRepository transactionRepository;

  public TransactionsResponseDTO execute(UUID userId, Pageable pageable) {
    Page<TransactionEntity> transactionsPage = transactionRepository.findByUserId(userId, pageable);

    return TransactionsResponseDTO.builder()
    .transactions(transactionsPage.getContent()) 
    .total((int) transactionsPage.getTotalElements()) 
    .totalPages(transactionsPage.getTotalPages()) 
    .currentPage(transactionsPage.getNumber()) 
    .build();
  }
}
