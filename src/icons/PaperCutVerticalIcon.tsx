import React, { FC, memo } from 'react';
import PaperCutVerticalSvg from '../svg/paper-cut-vertical.svg';

export interface IPaperCutVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperCutVerticalIcon: FC<IPaperCutVerticalIconProps> = memo(props => {
  return <PaperCutVerticalSvg {...props} />;
});
