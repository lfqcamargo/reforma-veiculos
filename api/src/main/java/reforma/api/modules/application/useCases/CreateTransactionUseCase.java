package reforma.api.modules.application.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reforma.api.modules.application.entities.TransactionEntity;
import reforma.api.modules.application.repositories.TransactionRepository;

@Service
public class CreateTransactionUseCase {

  @Autowired
  private TransactionRepository transactionRepository;

  public TransactionEntity execute(TransactionEntity transactionEntity) {
    return this.transactionRepository.save((transactionEntity));
  }
}
