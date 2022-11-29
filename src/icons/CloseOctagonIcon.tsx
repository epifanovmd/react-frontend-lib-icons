import React, { FC, memo } from 'react';
import CloseOctagonSvg from '../svg/close-octagon.svg';

export interface ICloseOctagonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseOctagonIcon: FC<ICloseOctagonIconProps> = memo(props => {
  return <CloseOctagonSvg {...props} />;
});
