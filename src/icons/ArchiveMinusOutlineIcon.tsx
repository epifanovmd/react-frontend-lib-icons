import React, { FC, memo } from 'react';
import ArchiveMinusOutlineSvg from '../svg/archive-minus-outline.svg';

export interface IArchiveMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveMinusOutlineIcon: FC<IArchiveMinusOutlineIconProps> = memo(props => {
  return <ArchiveMinusOutlineSvg {...props} />;
});
