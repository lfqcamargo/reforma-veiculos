package reforma.api.modules.application.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import reforma.api.modules.application.entities.TransactionEntity;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionsResponseDTO {
  private List<TransactionEntity> transactions;
  private int total;      
  private int totalPages; 
  private int currentPage;

  public int getCurrentPage() {
      return currentPage + 1; 
  }
}
