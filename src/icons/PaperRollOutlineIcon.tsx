import React, { FC, memo } from 'react';
import PaperRollOutlineSvg from '../svg/paper-roll-outline.svg';

export interface IPaperRollOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperRollOutlineIcon: FC<IPaperRollOutlineIconProps> = memo(props => {
  return <PaperRollOutlineSvg {...props} />;
});
