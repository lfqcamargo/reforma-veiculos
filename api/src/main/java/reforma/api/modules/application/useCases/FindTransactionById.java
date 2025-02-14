package reforma.api.modules.application.useCases;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reforma.api.modules.application.dto.TransactionResponseDTO;
import reforma.api.modules.application.entities.TransactionEntity;
import reforma.api.modules.application.repositories.TransactionRepository;
import reforma.api.modules.shared.exceptions.ResourceNotFoundError;

@Service
public class FindTransactionById {
  
  @Autowired
  private TransactionRepository transactionRepository;

  public TransactionResponseDTO execute(UUID id, UUID userId) {
    TransactionEntity transaction = this.transactionRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundError("Transação não encontrada."));

    if (!transaction.getUserId().equals(userId)) {
      throw new ResourceNotFoundError("Transação não encontrada.");
    }
    
    return TransactionResponseDTO.builder()
    .id(transaction.getId())
    .image(transaction.getImage())
    .nickname(transaction.getNickname())
    .color(transaction.getColor())
    .vehicleType(transaction.getVehicleType())
    .brand(transaction.getBrand())
    .model(transaction.getModel())
    .year(transaction.getYear())
    .purchasePrice(transaction.getPurchasePrice())
    .purchaseDate(transaction.getPurchaseDate())
    .purchasedFrom(transaction.getPurchasedFrom())
    .salePrice(transaction.getSalePrice())
    .saleDate(transaction.getSaleDate())
    .soldTo(transaction.getSoldTo())
    .build();
  }
}
