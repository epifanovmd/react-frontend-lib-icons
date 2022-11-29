import React, { FC, memo } from 'react';
import ContainEndSvg from '../svg/contain-end.svg';

export interface IContainEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContainEndIcon: FC<IContainEndIconProps> = memo(props => {
  return <ContainEndSvg {...props} />;
});
