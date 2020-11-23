import React from "react"
import { IIncomingInterviewsData } from "structure/interfaces/IIncomingInterviews"
import Data from "utils/helpers/Data"

import { useQuery, useMutation } from "@apollo/client"
import {
  INCOMING_INTERVIEWS,
  CANCEL_INTERVIEW,
} from "utils/constants/endpoints"

import UIMainContainer from "components/UI/UIBoxContainer"
import InterviewsIncoming from "components/User/Interviews/InterviewsIncoming"

const InterviewerIncomingInterviews = () => {
  const { loading, error, data } = useQuery(INCOMING_INTERVIEWS)
  // eslint-disable-next-line
  const [cancellation, { error: cancellationMutationError }] = useMutation(
    CANCEL_INTERVIEW
  )

  const [sort, setSort] = React.useState({
    property: "name",
    direction: "desc",
  })

  if (loading) return <p> Loading </p>
  if (error) return <p> Error </p>

  let incomingInterviews: IIncomingInterviewsData[] = Data.fromAPItoInput(data)

  const cancelInterview = (id: string, timestamp: string) => {
    cancellation({
      variables: Data.fromInputToCancelInterview(id, timestamp),
    })
  }

  return (
    <UIMainContainer>
      <InterviewsIncoming
        data={incomingInterviews}
        showName={false}
        onSort={setSort}
        sort={sort}
        cancelMutation={cancelInterview}
        isInterviewee={false}
      />
    </UIMainContainer>
  )
}

export default InterviewerIncomingInterviews