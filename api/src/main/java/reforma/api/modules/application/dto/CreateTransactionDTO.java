package reforma.api.modules.application.dto;

import java.util.Date;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CreateTransactionDTO {
  
  private UUID id;
  private String image;
  private String nickname;
  private String color;
  private String vehicleType;
  private String brand;
  private String model;
  private Integer year;
  private Float purchasePrice;
  private Date purchaseDate;
  private String purchasedFrom;
  private Float salePrice;
  private Date saleDate;
  private String soldTo;
  private UUID userId;
  
}
