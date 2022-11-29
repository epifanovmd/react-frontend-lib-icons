import React, { FC, memo } from 'react';
import VolcanoOutlineSvg from '../svg/volcano-outline.svg';

export interface IVolcanoOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VolcanoOutlineIcon: FC<IVolcanoOutlineIconProps> = memo(props => {
  return <VolcanoOutlineSvg {...props} />;
});
