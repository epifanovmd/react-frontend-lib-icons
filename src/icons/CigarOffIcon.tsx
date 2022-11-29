import React, { FC, memo } from 'react';
import CigarOffSvg from '../svg/cigar-off.svg';

export interface ICigarOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CigarOffIcon: FC<ICigarOffIconProps> = memo(props => {
  return <CigarOffSvg {...props} />;
});
