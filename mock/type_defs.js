module.exports = `
type Query {
    # API Version
    version: String!
}

# 著者
type Author {
    id: ID!
    # 著者名
    name: String!
    # 著者の本
    books: [Book]!
}

# 本
type Book {
    id: ID!
    # 名前
    name: String!
}

extend type Query {
    # 著者を取得する
    getAuthorById(id: ID!) : Author
}
`;
