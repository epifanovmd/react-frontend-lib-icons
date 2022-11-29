import React, { FC, memo } from 'react';
import CassetteSvg from '../svg/cassette.svg';

export interface ICassetteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CassetteIcon: FC<ICassetteIconProps> = memo(props => {
  return <CassetteSvg {...props} />;
});
