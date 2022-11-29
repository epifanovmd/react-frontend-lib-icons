import React, { FC, memo } from 'react';
import RawSvg from '../svg/raw.svg';

export interface IRawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RawIcon: FC<IRawIconProps> = memo(props => {
  return <RawSvg {...props} />;
});
