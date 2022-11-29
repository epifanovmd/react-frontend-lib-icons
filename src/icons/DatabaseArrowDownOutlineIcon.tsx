import React, { FC, memo } from 'react';
import DatabaseArrowDownOutlineSvg from '../svg/database-arrow-down-outline.svg';

export interface IDatabaseArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowDownOutlineIcon: FC<IDatabaseArrowDownOutlineIconProps> = memo(props => {
  return <DatabaseArrowDownOutlineSvg {...props} />;
});
