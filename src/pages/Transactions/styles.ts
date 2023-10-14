import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;
  margin: 4rem auto 0;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighLightProps {
  varient: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${({ varient, theme }) =>
    varient === "income" ? theme["green-300"] : theme["red-300"]};
`;
