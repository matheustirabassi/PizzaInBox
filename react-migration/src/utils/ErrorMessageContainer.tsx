type ErrorMessageContainerProps = {
  children?: React.ReactNode;
};
export const ErrorMessageContainer = ({ children }: ErrorMessageContainerProps) => (
  <span className="error">{children}</span>
);