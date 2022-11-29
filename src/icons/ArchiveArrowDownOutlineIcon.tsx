import React, { FC, memo } from 'react';
import ArchiveArrowDownOutlineSvg from '../svg/archive-arrow-down-outline.svg';

export interface IArchiveArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveArrowDownOutlineIcon: FC<IArchiveArrowDownOutlineIconProps> = memo(props => {
  return <ArchiveArrowDownOutlineSvg {...props} />;
});
