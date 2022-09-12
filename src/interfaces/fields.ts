export interface FieldsStateInterface
  extends Record<string, string | undefined> {
  email: string;
  password: string;
  confirmPassword?: string;
}
