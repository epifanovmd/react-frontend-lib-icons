import React, { FC, memo } from 'react';
import ArrangeSendBackwardSvg from '../svg/arrange-send-backward.svg';

export interface IArrangeSendBackwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrangeSendBackwardIcon: FC<IArrangeSendBackwardIconProps> = memo(props => {
  return <ArrangeSendBackwardSvg {...props} />;
});
