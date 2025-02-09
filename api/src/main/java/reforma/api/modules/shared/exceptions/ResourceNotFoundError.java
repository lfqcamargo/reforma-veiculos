package reforma.api.modules.shared.exceptions;

public class ResourceNotFoundError extends RuntimeException {
  public ResourceNotFoundError(String message) {
    super(message);
  }
}
