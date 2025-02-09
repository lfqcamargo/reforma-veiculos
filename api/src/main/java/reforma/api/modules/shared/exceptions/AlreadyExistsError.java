package reforma.api.modules.shared.exceptions;

public class AlreadyExistsError extends RuntimeException {
  public AlreadyExistsError(String message) {
    super(message);
  }
}
