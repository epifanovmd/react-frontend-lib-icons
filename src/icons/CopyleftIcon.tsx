import React, { FC, memo } from 'react';
import CopyleftSvg from '../svg/copyleft.svg';

export interface ICopyleftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CopyleftIcon: FC<ICopyleftIconProps> = memo(props => {
  return <CopyleftSvg {...props} />;
});
