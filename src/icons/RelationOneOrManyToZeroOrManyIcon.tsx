import React, { FC, memo } from 'react';
import RelationOneOrManyToZeroOrManySvg from '../svg/relation-one-or-many-to-zero-or-many.svg';

export interface IRelationOneOrManyToZeroOrManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToZeroOrManyIcon: FC<IRelationOneOrManyToZeroOrManyIconProps> = memo(props => {
  return <RelationOneOrManyToZeroOrManySvg {...props} />;
});
