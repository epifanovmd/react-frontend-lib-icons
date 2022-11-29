import React, { FC, memo } from 'react';
import ArrangeSendToBackSvg from '../svg/arrange-send-to-back.svg';

export interface IArrangeSendToBackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrangeSendToBackIcon: FC<IArrangeSendToBackIconProps> = memo(props => {
  return <ArrangeSendToBackSvg {...props} />;
});
