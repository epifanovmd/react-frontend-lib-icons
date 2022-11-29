import React, { FC, memo } from 'react';
import KnobSvg from '../svg/knob.svg';

export interface IKnobIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KnobIcon: FC<IKnobIconProps> = memo(props => {
  return <KnobSvg {...props} />;
});
