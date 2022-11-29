import React, { FC, memo } from 'react';
import BeehiveOutlineSvg from '../svg/beehive-outline.svg';

export interface IBeehiveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BeehiveOutlineIcon: FC<IBeehiveOutlineIconProps> = memo(props => {
  return <BeehiveOutlineSvg {...props} />;
});
