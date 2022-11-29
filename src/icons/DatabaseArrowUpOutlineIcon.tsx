import React, { FC, memo } from 'react';
import DatabaseArrowUpOutlineSvg from '../svg/database-arrow-up-outline.svg';

export interface IDatabaseArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowUpOutlineIcon: FC<IDatabaseArrowUpOutlineIconProps> = memo(props => {
  return <DatabaseArrowUpOutlineSvg {...props} />;
});
