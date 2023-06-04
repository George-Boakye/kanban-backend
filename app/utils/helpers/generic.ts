class GenericHelper {
  static async validateInput<T, K>(schema: any, object: K) {
    return schema.validateAsync(object);
  }
}

export default GenericHelper;
