package reforma.api.modules.application.entities;

import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import reforma.api.modules.users.entities.UserEntity;

@Entity(name="transactions")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TransactionEntity {
  
  @Id
  @GeneratedValue(strategy=GenerationType.UUID)
  private UUID id;

  private String image;

  @NotBlank(message="Campo obrigatório.")
  private String nickname;

  @NotBlank(message="Campo obrigatório.")
  private String color;

  @NotBlank(message="Campo obrigatório.")
  private String vehicleType;

  @NotBlank(message="Campo obrigatório.")
  private String brand;

  @NotBlank(message="Campo obrigatório.")
  private String model;

  @NotNull(message="Campo obrigatório.")
  private Integer year;

  @NotNull(message="Campo obrigatório.")
  private Float purchasePrice;

  @NotNull(message="Campo obrigatório.")
  private Date purchaseDate;

  private String purchasedFrom;

  @NotNull(message="Campo obrigatório.")
  private Float salePrice;

  private Date saleDate;

  private String soldTo;

  @ManyToOne()
  @JoinColumn(name="user_id", insertable=false, updatable=false)
  private UserEntity userEntity;

  @Column(name="user_id", nullable=false)
  private UUID userId;

}
