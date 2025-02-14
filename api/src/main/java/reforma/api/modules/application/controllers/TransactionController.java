package reforma.api.modules.application.controllers;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import reforma.api.modules.application.dto.CreateTransactionDTO;
import reforma.api.modules.application.dto.TransactionResponseDTO;
import reforma.api.modules.application.dto.TransactionsResponseDTO;
import reforma.api.modules.application.entities.TransactionEntity;
import reforma.api.modules.application.useCases.CreateTransactionUseCase;
import reforma.api.modules.application.useCases.FindTransactionById;
import reforma.api.modules.application.useCases.FindTransactionsByUserUseCase;

@RestController
@RequestMapping("/transactions")
public class TransactionController {
  
  @Autowired
  private CreateTransactionUseCase createTransactionUseCase;

  @Autowired
  private FindTransactionById findTransactionByIdUseCase;

  @Autowired
  private FindTransactionsByUserUseCase findTransactionsByUserUseCase;

  @PostMapping("/")
  public TransactionEntity create(
    @Valid @RequestBody CreateTransactionDTO createTransactionDTO, 
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

  @GetMapping("/{id}")
  public TransactionResponseDTO getById(
    HttpServletRequest request,  
    @PathVariable UUID id) {

      var userIdString = (String) request.getAttribute("user_id");
      UUID userId = UUID.fromString(userIdString);

      return findTransactionByIdUseCase.execute(id, userId);
  }
  

  @GetMapping("/")
  public TransactionsResponseDTO getAllByUser(
    HttpServletRequest request,
    @RequestParam(defaultValue = "1") int page,
    @RequestParam(defaultValue = "10") int size
    ) {
      var userIdString = (String) request.getAttribute("user_id");
      UUID userId = UUID.fromString(userIdString);

      Pageable pageable = PageRequest.of(page - 1, size);
      return findTransactionsByUserUseCase.execute(userId, pageable);
  }

}
