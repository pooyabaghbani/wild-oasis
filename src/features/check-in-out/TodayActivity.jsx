import styled from "styled-components";
import { useTodayActivity } from "./useTodayActivity";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayAcivity() {
  const { todayActivity, isPending } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>
      {!isPending ? (
        !todayActivity.length > 0 ? (
          <NoActivity>There is no activity today</NoActivity>
        ) : (
          <TodayList>
            {todayActivity.map(item => (
              <TodayItem activity={item} key={item.id} />
            ))}
          </TodayList>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayAcivity;
