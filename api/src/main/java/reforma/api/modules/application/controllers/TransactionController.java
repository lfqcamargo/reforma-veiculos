package reforma.api.modules.application.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import reforma.api.modules.application.dto.CreateTransactionDTO;
import reforma.api.modules.application.entities.TransactionEntity;
import reforma.api.modules.application.useCases.CreateTransactionUseCase;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
  
  @Autowired
  private CreateTransactionUseCase createTransactionUseCase;

  @PostMapping("/")
  public TransactionEntity create(
    @Valid @
    RequestBody CreateTransactionDTO createTransactionDTO, 
    HttpServletRequest request
    ) {
      var userId = request.getAttribute("user_id");

      var transactionEntity = TransactionEntity.builder()
          .userId(UUID.fromString(userId.toString()))
          .image(createTransactionDTO.getImage())
          .nickname(createTransactionDTO.getNickname())
          .color(createTransactionDTO.getColor())
          .vehicleType(createTransactionDTO.getVehicleType())
          .brand(createTransactionDTO.getBrand())
          .model(createTransactionDTO.getModel())
          .year(createTransactionDTO.getYear())
          .purchasePrice(createTransactionDTO.getPurchasePrice())
          .purchaseDate(createTransactionDTO.getPurchaseDate())
          .purchasedFrom(createTransactionDTO.getPurchasedFrom())
          .salePrice(createTransactionDTO.getSalePrice())
          .saleDate(createTransactionDTO.getSaleDate())
          .soldTo(createTransactionDTO.getSoldTo())
          .build();

      return createTransactionUseCase.execute(transactionEntity);
  }

}
