import React, { FC, memo } from 'react';
import HistorySvg from '../svg/history.svg';

export interface IHistoryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HistoryIcon: FC<IHistoryIconProps> = memo(props => {
  return <HistorySvg {...props} />;
});
