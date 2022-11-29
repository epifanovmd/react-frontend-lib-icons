import React, { FC, memo } from 'react';
import TrelloSvg from '../svg/trello.svg';

export interface ITrelloIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrelloIcon: FC<ITrelloIconProps> = memo(props => {
  return <TrelloSvg {...props} />;
});
