import React, { FC, memo } from 'react';
import TshirtCrewOutlineSvg from '../svg/tshirt-crew-outline.svg';

export interface ITshirtCrewOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TshirtCrewOutlineIcon: FC<ITshirtCrewOutlineIconProps> = memo(props => {
  return <TshirtCrewOutlineSvg {...props} />;
});
