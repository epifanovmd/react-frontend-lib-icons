import React, { FC, memo } from 'react';
import SofaOutlineSvg from '../svg/sofa-outline.svg';

export interface ISofaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SofaOutlineIcon: FC<ISofaOutlineIconProps> = memo(props => {
  return <SofaOutlineSvg {...props} />;
});
