import React, { FC, memo } from 'react';
import CigarSvg from '../svg/cigar.svg';

export interface ICigarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CigarIcon: FC<ICigarIconProps> = memo(props => {
  return <CigarSvg {...props} />;
});
