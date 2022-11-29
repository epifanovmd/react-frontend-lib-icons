import React, { FC, memo } from 'react';
import AsteriskCircleOutlineSvg from '../svg/asterisk-circle-outline.svg';

export interface IAsteriskCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AsteriskCircleOutlineIcon: FC<IAsteriskCircleOutlineIconProps> = memo(props => {
  return <AsteriskCircleOutlineSvg {...props} />;
});
