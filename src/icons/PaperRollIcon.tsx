import React, { FC, memo } from 'react';
import PaperRollSvg from '../svg/paper-roll.svg';

export interface IPaperRollIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaperRollIcon: FC<IPaperRollIconProps> = memo(props => {
  return <PaperRollSvg {...props} />;
});
