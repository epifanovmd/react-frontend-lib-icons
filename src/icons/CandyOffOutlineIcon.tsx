import React, { FC, memo } from 'react';
import CandyOffOutlineSvg from '../svg/candy-off-outline.svg';

export interface ICandyOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandyOffOutlineIcon: FC<ICandyOffOutlineIconProps> = memo(props => {
  return <CandyOffOutlineSvg {...props} />;
});
