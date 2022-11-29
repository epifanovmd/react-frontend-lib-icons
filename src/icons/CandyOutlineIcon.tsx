import React, { FC, memo } from 'react';
import CandyOutlineSvg from '../svg/candy-outline.svg';

export interface ICandyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandyOutlineIcon: FC<ICandyOutlineIconProps> = memo(props => {
  return <CandyOutlineSvg {...props} />;
});
