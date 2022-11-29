import React, { FC, memo } from 'react';
import TshirtCrewSvg from '../svg/tshirt-crew.svg';

export interface ITshirtCrewIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TshirtCrewIcon: FC<ITshirtCrewIconProps> = memo(props => {
  return <TshirtCrewSvg {...props} />;
});
