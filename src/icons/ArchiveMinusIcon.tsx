import React, { FC, memo } from 'react';
import ArchiveMinusSvg from '../svg/archive-minus.svg';

export interface IArchiveMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMinusIcon: FC<IArchiveMinusIconProps> = memo(props => {
  return <ArchiveMinusSvg {...props} />;
});
