import React, { FC, memo } from 'react';
import TrophyOutlineSvg from '../svg/trophy-outline.svg';

export interface ITrophyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrophyOutlineIcon: FC<ITrophyOutlineIconProps> = memo(props => {
  return <TrophyOutlineSvg {...props} />;
});
