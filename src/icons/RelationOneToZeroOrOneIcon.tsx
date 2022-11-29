import React, { FC, memo } from 'react';
import RelationOneToZeroOrOneSvg from '../svg/relation-one-to-zero-or-one.svg';

export interface IRelationOneToZeroOrOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToZeroOrOneIcon: FC<IRelationOneToZeroOrOneIconProps> = memo(props => {
  return <RelationOneToZeroOrOneSvg {...props} />;
});
